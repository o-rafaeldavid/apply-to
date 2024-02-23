export function mapear(
    number : number,
    inMin : number,
    inMax : number,
    outMin : number,
    outMax : number
) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}


export function isMouseEvent(event: Event): event is MouseEvent {
    return 'detail' in event;
}