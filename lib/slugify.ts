export const slugify = (s: string) =>
    s.toLowerCase()
        .normalize('NFKD')
        .replace(/[\u0300-\u036f]/g, '') // diakrytyki
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
