import { years } from '$lib/data/projects.js';
import { error } from '@sveltejs/kit';

export function load({ params }) {
    // Appiattisce tutti i progetti di tutti gli anni e cerca quello con l'id corrispondente
    const project = years
        .flatMap(y => y.projects)
        .find(p => p.id === params.id);

    if (!project) throw error(404, 'Progetto non trovato');

    return { project };
}