export default async function updateTaskInDatabase(taskId, updatedTask) {
  const URL = `http://localhost:3001/tasks/${taskId}`;
  const request = await fetch(URL, {
    method: 'PUT',
    body: JSON.stringify({
      task: updatedTask,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const response = await request.json();
  return response;
}
