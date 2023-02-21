export async function getAllEvents() {
  const url = await fetch(process.env.FIREBASE_URL);
  const data = await url.json();
  const transformedEvents = [];
  for (const key in data) {
    transformedEvents.push({
      id: key,
      ...data[key],
    });
  }
  return transformedEvents;
}

export async function getFeaturedEvents() {
  const events = await getAllEvents();
  return events.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;
  const events = await getAllEvents();

  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
