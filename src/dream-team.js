function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  const arr = members
    .filter((element) => typeof element === "string")
    .map((element) => element.trim())
    .map((element) => element[0].toUpperCase())
    .sort()
    .join('');
    
  return arr;
}

module.exports = {
  createDreamTeam
};