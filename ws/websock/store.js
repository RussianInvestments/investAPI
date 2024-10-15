const wsErrorCodes = {
  1000: "Normal Closure",
  1001: "Going Away",
  1002: "Protocol error",
  1003: "Unsupported Data",
  1005: "No Status Rcvd",
  1006: "Abnormal Closure",
  1007: "Invalid frame payload data",
  1008: "Policy Violation",
  1009: "Message Too Big",
  1010: "Mandatory Ext.",
  1011: "Internal Error",
  1012: "Service Restart",
  1013: "Try Again Later",
  1014: "The server was acting as a gateway or proxy and received an invalid response from the upstream server.",
  1015: "TLS handshake",
  3000: "Unauthorized",
  3003: "Forbidden",
};
export default {
  state() {
    return {
      method: "unknown",
      request: { json: "{}" },
      responses: [],
      streamLog: [],
      connection_state: -1,
      websocketIndex: 0,
      websocket: null,
      url: "wss://invest-public-api.tinkoff.ru/ws/",
      method:
        "tinkoff.public.invest.api.contract.v1.MarketDataStreamService/MarketDataStream",
      error: null,
      token: sessionStorage
        ? sessionStorage.getItem("tinkoff.auth.token")
        : null,
      init: null,
      disposables: {},
    };
  },
  mutations: {
    init(state, init) {
      state.init = init;
    },
    onMessage(state, payload) {
      state.streamLog.push({
        id: state.streamLog.length,
        label: "message@" + new Date().toISOString(),
        type: "message",
        payload: payload,
        data: JSON.stringify(payload, null, 2),
      });
    },
    onError(state, error) {
      state.connection_state = -2;
      state.error = error;
    },
    onConnectPending(state, websocket) {
      if (state.connection_state == 1) {
        console.error("pending connection close error", state.websocket);
      }
      state.websocket = websocket;
      state.connection_state = 1;
      state.error = null;
      state.disposables[state.websocketIndex] = (() => {
        websocket.onclose = null;
        websocket.close();
      });
      state.websocketIndex = state.websocketIndex + 1;
    },
    onConnected(state) {
      state.connection_state = 0;
    },
    onDisconnect(state, index) {
      if (!index) index = state.websocketIndex;
      if (index < state.websocketIndex) {
        Object.keys(state.disposables)
        .filter(d => !!state.disposables[d])
        .filter(d => d < index)
        .forEach((d) => {
          state.disposables[d]();
          state.disposables[d] = null;
        });
      } else {
        if (state.websocket != null) {
          try {
            state.websocket.close();
          } catch (error) {
            console.error("error", error);
          }
        }
        state.connection_state = -1;
        state.websocket = null;
      }    
    },
    onSend(state, request) {
      state.request.json = request;
      state.streamLog.push({
        id: state.streamLog.length,
        label: "request@" + new Date().toISOString(),
        type: "request",
        data: request,
      });
    },
    onAuthToken(state, token) {
      state.token = token;
      if (sessionStorage) sessionStorage.setItem("tinkoff.auth.token", token);
    },
    updateRequest(state, request) {
      state.request.json = request;
    },
    onRouteChange(state, meta) {
      state.responses = [];
      state.streamLog = [];
      state.request = meta.request;
      state.method = meta.methodName.substr(1);
      state.error = null;

      Object.keys(state.disposables)
      .filter(d => !!state.disposables[d])
      .forEach((d) => state.disposables[d]());
      state.disposables = {};
      state.connection_state = -1;
      state.websocket = null;
    },
  },
  actions: {
    connect(context, params) {
      var state = context.state;
      var websocketIndex = state.websocketIndex;
      try {
        if (state.connection_state == 1) {
          console.error("connection is pending", context.state.websocket);
          return;
        } else if (state.connection_state == 0 && state.websocket != null) {
          context.commit("onSend", params);
          try {
            state.websocket.send(state.request.json);
          } catch (error) {
            console.error("error", error);
          }
          return;
        } else if (state.websocket != null) {
          try {
            state.websocket.close();
          } catch (error) {
            console.error("error", error);
          }
          context.commit("onDisconnect", websocketIndex);
        }
        if (!state.token) {
          context.commit("onError", "token required");
          return;
        }
        var ws = new WebSocket(state.url + state.method, [
          "json",
          state.token.trim(),
        ]);
        console.log("ws created", params);
        context.commit("onConnectPending", ws);
        context.commit("onSend", params);
        ws.onmessage = (e) => {
          var data = JSON.parse(e.data);
          context.commit("onMessage", data);
        };
        ws.onerror = (error) => {
          console.log("error", error);
          context.commit("onError", error);
          try {
            ws.close();
          } catch (error) {
            console.error("error", error);
          }

          context.commit("onDisconnect", websocketIndex);
        };
        ws.onopen = function () {
          try {
            ws.send(state.request.json);
            context.commit("onConnected");
          } catch (error) {
            try {
              ws.close();
            } catch (error) {
              console.error("error", error);
            }
            console.error("error", error);
            context.commit("onError", error);
          }
        };
        ws.onclose = (event) => {
          console.log("The connection has been closed", event);
          context.commit("onDisconnect", websocketIndex);
          if (state.init) {
            if (!event.code || event.code == 1000) {
              state.init.notifyOk(
                "The connection has been closed successfully."
              );
            } else {
              state.init.notifyError(
                "The connection has been closed with " +
                  (wsErrorCodes[event.code]
                    ? wsErrorCodes[event.code]
                    : event.code)
              );
            }
          }
        };
      } catch (error) {
        console.error("error", error);
        context.commit("onError", error);
      }
    },
    disconnect(context) {
      context.commit("onDisconnect");
    },
  },
};
