async function loadExcelQuestions(file) {
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const json = XLSX.utils.sheet_to_json(sheet);
    return json.map(row => row["Câu hỏi"] || row["Question"]);
}

document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById("questionFile");
    const pickButton = document.getElementById("pickQuestion");
    const resultBox = document.getElementById("questionResult");

    let questions = [];

    fileInput.addEventListener("change", async () => {
        questions = await loadExcelQuestions(fileInput.files[0]);
        resultBox.innerHTML = "Đã tải " + questions.length + " câu hỏi.";
    });

    pickButton.addEventListener("click", () => {
        if (questions.length === 0) {
            resultBox.innerHTML = "Chưa có danh sách câu hỏi.";
            return;
        }
        const r = Math.floor(Math.random() * questions.length);
        resultBox.innerHTML = questions[r];
    });
});
