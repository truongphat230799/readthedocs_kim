async function loadExcelStudent(file) {
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const json = XLSX.utils.sheet_to_json(sheet);
    return json.map(row => row["Học sinh"] || row["Name"]);
}

document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById("studentFile");
    const pickButton = document.getElementById("pickStudent");
    const resultBox = document.getElementById("studentResult");

    let students = [];

    fileInput.addEventListener("change", async () => {
        students = await loadExcelStudent(fileInput.files[0]);
        resultBox.innerHTML = "Đã tải " + students.length + " học sinh.";
    });

    pickButton.addEventListener("click", () => {
        if (students.length === 0) {
            resultBox.innerHTML = "Chưa có danh sách học sinh.";
            return;
        }
        const r = Math.floor(Math.random() * students.length);
        resultBox.innerHTML = students[r];
    });
});
