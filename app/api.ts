export interface PaginatedResponse<T> {
  count: number;
  next: string;
  previous?: string;
  results: Array<T>;
}

export interface Person {
  name: string;
  height: number;
  birth_year: string;
  hair_color: string;
  skin_color: string;
}

export async function getPeople(): Promise<PaginatedResponse<Person>> {
  const response = await fetch("https://swapi.dev/api/people");
  if (!response.ok) {
    throw new Error("Network error.");
  }

  return response.json();
}
