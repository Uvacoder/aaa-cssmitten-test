module.exports = function whitespace(query) {
  return /*css*/`
/* WHITESPACE */
.whitespace-normal${query}{white-space:normal;}
.truncate,
.whitespace-no-wrap${query}{white-space:nowrap;}
.whitespace-pre${query}{white-space:pre;}
.whitespace-pre-line${query}{white-space:pre-line;}
.whitespace-pre-wrap${query}{white-space:pre-wrap;}
  `
}
