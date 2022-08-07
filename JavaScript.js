
const title = '========================\n現在持っているタスクの一覧\n========================';
const tasks = ['掃除', '買い物', '散歩'];

console.log(title);

const hasList = tasks => {
tasks.forEach((value, index) => {
  console.log(`${index}:${value}`);
});
};
hasList(tasks);

const input = prompt('タスクを入力してください');

const addTask = input => {
  console.log(title);
  tasks.push(input);
  hasList(tasks);
  alert('新しいタスクを追加しました。');
};
addTask(input);

const pick = prompt('「確認,追加,削除,終了」の4つのいずれかを入力してください');