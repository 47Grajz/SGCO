
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


export function getCookie(name) {
  if (typeof document !== 'undefined') {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      const cookieValue = parts.pop().split(";").shift();
      if (cookieValue) {
        return cookieValue;
      }
    }
  }
  return null;
}