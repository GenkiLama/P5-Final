async function getData(url) {
  if (getCurrentId()) {
    const res = await fetch(`${url}/${getCurrentId()}`);
    const data = await res.json();
    return data;
  }
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

function getCurrentId() {
  const currentUrl = window.location.href;
  const url = new URL(currentUrl);
  const id = url.searchParams.get("id");
  return id;
}

export { getData, getCurrentId };
