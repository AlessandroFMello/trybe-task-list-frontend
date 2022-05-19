export default async function updateStatusInDatabase(taskId, updatedStatus) {
  const URL = `http://localhost:3001/tasks/${taskId}`;
  const request = await fetch(URL, {
    method: 'PATCH',
    body: JSON.stringify({
      status: updatedStatus,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const response = await request.json();
  return response;
}
