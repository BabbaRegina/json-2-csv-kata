module.exports.covertJson = (json) => {
  return json.reduce((acc, cv) => {
    acc[0] = Object.keys(cv).join(';')
    return acc.concat(Object.values(cv).join(';'))
  }, []).join('\n')
}
