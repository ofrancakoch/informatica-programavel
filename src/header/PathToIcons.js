export function PathToIcons(option) {
  
  return (
    "/icons/icone_" +
    option.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") +
    '.svg'

  );
}
