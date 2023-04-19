/* accept a function as an argument and return an array */

export default function guardrail(mathFunction) {
  const queue = [];

  try {
    queue.push(mathFunction());
  } catch (e) {
    queue.push(e.toString());
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
