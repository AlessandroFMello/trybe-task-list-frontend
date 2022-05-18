export default async function getAllTasksFromApi() {
  const URL = 'http://localhost:3001/tasks';

  const request = await fetch(URL);

  const response = request.json();

  return response;
}
