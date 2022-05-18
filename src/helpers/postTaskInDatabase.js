export default async function postTaskInDatabase(newTask) {
  const URL = 'http://localhost:3001/tasks';
  const request = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
      task: newTask,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const response = await request.json();
  return response;
}
