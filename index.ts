import './style.css';
import { Data } from './data';
import { Serie } from './serie';

const seriesTbody: HTMLElement = document.getElementById('series')!;
function SeriesInTable(series: Serie[]): void {
  series.forEach((serie) => {
    const trElement = document.createElement('tr');
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td><a href="#" class="serie-name" data-id="${serie.id}">${serie.name}</a></td>
                           <td>${serie.canal}</td>
                           <td>${serie.temporadas}</td>`;
    seriesTbody.appendChild(trElement);
  });
}

function promedio(series: Serie[]): number {
  let totalTemporadas: number = 0;
  series.forEach((serie) => (totalTemporadas += serie.temporadas));
  return totalTemporadas / series.length;
}
function promediointable(series: Serie[]): void {
  const trElement = document.createElement('tr');
  trElement.innerHTML = `<td colspan="3"><strong>Promedio de Temporadas</strong></td>
                         <td><strong>${promedio(series).toFixed(
                           2
                         )}</strong></td>`;
  seriesTbody.appendChild(trElement);
}
function detalles(serie: Serie): void {
  const serieDetail = document.getElementById('serieDetail')!;
  const serieName = document.getElementById('serieName')!;
  const serieCanal = document.getElementById('serieCanal')!;
  const serieDescription = document.getElementById('serieDescription')!;
  const serieTemporadas = document.getElementById('serieTemporadas')!;
  const serieDuration = document.getElementById('serieDuration')!;

  serieName.textContent = serie.name;
  serieCanal.textContent = serie.canal;
  serieDescription.textContent = serie.descripcion;
  serieTemporadas.textContent = serie.temporadas.toString();
  serieDuration.textContent = serie.episodios.toString();

  serieDetail.style.display = 'block';
}

seriesTbody.addEventListener('click', (event) => {
  const target = event.target as HTMLElement;
  if (target.classList.contains('serie-name')) {
    const serieId = parseInt(target.getAttribute('data-id')!);
    const selectedSerie = Data.find((serie) => serie.id === serieId);
    if (selectedSerie) {
      detalles(selectedSerie!);
    }
    event.preventDefault();
  }
});

SeriesInTable(Data);
promediointable(Data);
