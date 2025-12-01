module.exports = {
  sleep: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
  THREE_MINUTES: 3 * 60 * 1000,

  getUsernamesFromText(body) {
    const matches = body.match(/@([a-zA-Z0-9-_]+)/g) || [];
    return matches.map((x) => x.replace("@", ""));
  }
};
