/**
 * Format a number
 * params.value = the number
 * params.decimals = how many decimals
 * params.commas = include commas
 * params.dollars
 * @param {type} params - parameters
 * @returns String
 */
function formatNumber(params) {
    var v = params.value;
    if (null == typeof v || "" == v)
        v = 0.0;
    if ("string" == typeof v)
        v = parseFloat(v);
    if (isNaN(v)) {
        return params.value;
    }
    var n = v.toFixed(params.decimals).toString();
    if (params.commas) {
        n = n.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    if (params.dollars) {
        if (n.startsWith("-")) {
            n = "($" + n.slice(1) + ")";
        } else {
            n = "$" + n
        }
    }
    return n;
}

