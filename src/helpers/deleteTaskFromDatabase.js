export default async function deleteTaskFromDatabase(taskId) {
  const URL = `http://localhost:3001/tasks/${taskId}`;
  const request = await fetch(URL, {
    method: 'DELETE',
  });

  const response = await request.json();

  return response;
}
