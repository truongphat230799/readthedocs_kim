async function loadExcelTeam(file) {
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const json = XLSX.utils.sheet_to_json(sheet);
    return json.map(row => row["Học sinh"] || row["Name"]);
}

function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById("teamFile");
    const pickButton = document.getElementById("makeTeam");
    const resultBox = document.getElementById("teamResult");
    const teamCount = document.getElementById("teamCount");

    let students = [];

    fileInput.addEventListener("change", async () => {
        students = await loadExcelTeam(fileInput.files[0]);
        resultBox.innerHTML = "Đã tải " + students.length + " học sinh.";
    });

    pickButton.addEventListener("click", () => {
        if (students.length === 0) {
            resultBox.innerHTML = "Chưa có danh sách học sinh.";
            return;
        }

        const n = parseInt(teamCount.value);
        let shuffled = shuffle([...students]);
        let groups = Array.from({ length: n }, () => []);

        shuffled.forEach((s, i) => {
            groups[i % n].push(s);
        });

        let html = "";
        groups.forEach((g, i) => {
            html += `<h3>Đội ${i+1}</h3><ul>`;
            g.forEach(m => html += `<li>${m}</li>`);
            html += "</ul>";
        });

        resultBox.innerHTML = html;
    });
});
