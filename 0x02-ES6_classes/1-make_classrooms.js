/* create a classroom from the class ClassRoom */
import ClassRoom from './0-classroom';

export default function intializeRooms() {
  const rooms = [];
  const sizes = [19, 20, 34];
  for (const si of sizes) {
    rooms.push(new ClassRoom(si));
  }
  return rooms;
}
