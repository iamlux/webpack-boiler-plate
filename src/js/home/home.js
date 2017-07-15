import $ from "jquery";

export const sqrt = Math.sqrt;
export function square(x) {
    return x * x;
}
export function diag(x, y) {
    return sqrt(square(x) + square(y));
}
export function lakshmi() {
    $('.append_text').html("This is appended text");
}