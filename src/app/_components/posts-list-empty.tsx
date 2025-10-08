export function EmptyPostList() {
  return (
    <div
      className="border rounded p-6 border-cafe shadow-md bg-linear-to-r from-slate-800 to-sky-900 mt-20"
      role="alert"
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight mb-4 text-cafe">
        Le labo est en pleine ébullition !
      </h2>
      <p>
        Le premier article est en cours de distillation. En attendant la fin de
        cette minutieuse expérience tu peux:
      </p>
      <ul className="list-inside text-50 mt-2 space-y-2">
        <li>- Relire tes tests unitaires, (ou les écrire, le cas échéant).</li>
        <li>- Te préparer une tasse de café, (indispensable pour la suite).</li>
        <li>
          - Me contacter directement pour me mettre la pression, (ou me
          l&apos;amener 🍻)
        </li>
      </ul>
      <div className="mt-4">Merci de ta patience, à bientôt !</div>
    </div>
  );
}
