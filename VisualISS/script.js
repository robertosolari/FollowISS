async function fetchData() {
    const res = await fetch ("http://api.open-notify.org/astros.json");
    const record = await res.json();
    
    console.log("--fetchData--");
    console.log(record.people[0]);
}
fetchData();