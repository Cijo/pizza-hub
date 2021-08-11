export const getProducts = ()=> {
    return fetch('data-source.json').then(res => res.json()).then(d => d.data);
}
