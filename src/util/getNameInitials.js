/**
 * Takes a full name, and returns the first and last initials if available.
 * @param {String} name
 * @returns {String}
 */
function getNameInitials(name) {
  const names = (name || '').split(' ');
  const firstInitial = names[0].charAt(0);
  return names.length > 1
    ? firstInitial + names[names.length - 1].charAt(0)
    : firstInitial;
}

export default getNameInitials;
