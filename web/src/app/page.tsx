'use client'
import { useState } from "react";
import WomanBody from "./components/woman-body";

const muscleColors = {
  trapezio: 0,
  deltoidLareal: 0,
  deltoidAnterior: 0,
  deltoidPosterior: 0,
  romboide: 0,
  peitoralMaior: 0,
  tricepesLogo: 0,
  tricepesMedio: 0,
  tricepesLateral: 0,
  latissimoDorso: 0,
  bicipes: 0,
  serratil: 0,
  absMedio: 0,
  absInfra: 0,
  absLateral: 0,
  lombar: 0,
  gluteoMaximo: 0,
  gluteoMedio: 0,
  sartori: 0,
  adutor: 0,
  retoFemoral: 0,
  vastoMedial: 0,
  vastoLaretal: 0,
  bicipesFemoral: 0,
  semitendineo: 0,
  semiMembranoso: 0,
  panturilhaMedial: 0,
  panturilhaLateral: 0,
};

const ativacaoMuscular = {
  supino: {
    trapezio: 20,
    deltoidAnterior: 70,
    tricepesLogo: 80,
    peitoralMaior: 100,
  },
  agachamento: {
    quadriceps: 100,
    gluteoMaximo: 80,
    lombar: 40,
  },
  puxadaFrontal: {
    latissimoDorso: 100,
    bicipes: 80,
    romboide: 60,
  },
  levantamentoTerra: {
    quadriceps: 70,
    gluteoMaximo: 90,
    lombar: 100,
    abdominais: 40,
  },
  desenvolvimentoComHalteres: {
    deltoidAnterior: 80,
    deltoidLateral: 70,
    trapezio: 50,
    tricepesLogo: 60,
  },
  barraFixa: {
    latissimoDorso: 100,
    bicipes: 80,
    romboide: 60,
  },
  roscaDireta: {
    bicipes: 100,
    antebraco: 70,
  },
  elevacaoLateral: {
    deltoidLateral: 100,
    trapezio: 50,
    romboide: 40,
  },
  extensaoDeTriceps: {
    tricepesLogo: 100,
    deltoidPosterior: 60,
  },
  abdominais: {
    absMedio: 100,
    absInfra: 80,
    absLateral: 60,
  },
  stiff: {
    gluteoMaximo: 80,
    bicepsFemoral: 70,
    lombar: 90,
  },
  afundo: {
    quadriceps: 90,
    gluteoMaximo: 70,
    adutor: 60,
  },
  flexaoDePernas: {
    quadriceps: 100,
    vastoMedial: 80,
    vastoLateral: 60,
    bicepsFemoral: 70,
  },
  panturrilhaEmPe: {
    panturilhaMedial: 80,
    panturilhaLateral: 70,
  }
};

export default function Home() {
  const [exercicioSelecionado, setExercicioSelecionado] = useState("");
  const [body, setBody] = useState(muscleColors)

  const exercicios = [
    {
      nome: "Supino",
      callback: () => {
        const novosValores: any = { ...body };
        const ativacao: any = ativacaoMuscular["supino"];
        for (const musculo in ativacao) {
          novosValores[musculo] = ativacao[musculo];
        }
        setBody(novosValores);
      },
    },
    {
      nome: "Puxada Frontal",
      callback: () => {
        const novosValores: any = { ...body };
        const ativacao: any = ativacaoMuscular["puxadaFrontal"];
        for (const musculo in ativacao) {
          novosValores[musculo] = ativacao[musculo];
        }
        setBody(novosValores);
      },
    },
    {
      nome: "Agachamento",
      callback: () => {
        const novosValores: any = { ...body };
        const ativacao: any = ativacaoMuscular["agachamento"];
        for (const musculo in ativacao) {
          novosValores[musculo] = ativacao[musculo];
        }
        setBody(novosValores);
      },
    },
    {
      nome: "Levantamento Terra",
      callback: () => {
        const novosValores: any = { ...body };
        const ativacao: any = ativacaoMuscular["levantamentoTerra"];
        for (const musculo in ativacao) {
          novosValores[musculo] = ativacao[musculo];
        }
        setBody(novosValores);
      },
    },
    {
      nome: "Desenvolvimento com Halter",
      callback: () => {
        const novosValores: any = { ...body };
        const ativacao: any = ativacaoMuscular["desenvolvimentoComHalteres"];
        for (const musculo in ativacao) {
          novosValores[musculo] = ativacao[musculo];
        }
        setBody(novosValores);
      },
    },
    {
      nome: "Barra Fixa",
      callback: () => {
        const novosValores: any = { ...body };
        const ativacao: any = ativacaoMuscular["barraFixa"];
        for (const musculo in ativacao) {
          novosValores[musculo] = ativacao[musculo];
        }
        setBody(novosValores);
      },
    },
    {
      nome: "Rosca Direta",
      callback: () => {
        const novosValores: any = { ...body };
        const ativacao: any = ativacaoMuscular["roscaDireta"];
        for (const musculo in ativacao) {
          novosValores[musculo] = ativacao[musculo];
        }
        setBody(novosValores);
      },
    },
    {
      nome: "Elevação Lateral",
      callback: () => {
        const novosValores: any = { ...body };
        const ativacao: any = ativacaoMuscular["elevacaoLateral"];
        for (const musculo in ativacao) {
          novosValores[musculo] = ativacao[musculo];
        }
        setBody(novosValores);
      },
    },
    {
      nome: "Extensão de Tricips",
      callback: () => {
        const novosValores: any = { ...body };
        const ativacao: any = ativacaoMuscular["extensaoDeTriceps"];
        for (const musculo in ativacao) {
          novosValores[musculo] = ativacao[musculo];
        }
        setBody(novosValores);
      },
    },
    {
      nome: "Abdominais",
      callback: () => {
        const novosValores: any = { ...body };
        const ativacao: any = ativacaoMuscular["abdominais"];
        for (const musculo in ativacao) {
          novosValores[musculo] = ativacao[musculo];
        }
        setBody(novosValores);
      },
    },
    {
      nome: "Stiff",
      callback: () => {
        const novosValores: any = { ...body };
        const ativacao: any = ativacaoMuscular["stiff"];
        for (const musculo in ativacao) {
          novosValores[musculo] = ativacao[musculo];
        }
        setBody(novosValores);
      },
    },
    {
      nome: "Afundo",
      callback: () => {
        const novosValores: any = { ...body };
        const ativacao: any = ativacaoMuscular["afundo"];
        for (const musculo in ativacao) {
          novosValores[musculo] = ativacao[musculo];
        }
        setBody(novosValores);
      },
    },
    {
      nome: "Flexão de Pernas",
      callback: () => {
        const novosValores: any = { ...body };
        const ativacao: any = ativacaoMuscular["flexaoDePernas"];
        for (const musculo in ativacao) {
          novosValores[musculo] = ativacao[musculo];
        }
        setBody(novosValores);
      },
    },
    {
      nome: "Panturilha em Pé",
      callback: () => {
        const novosValores: any = { ...body };
        const ativacao: any = ativacaoMuscular["panturrilhaEmPe"];
        for (const musculo in ativacao) {
          novosValores[musculo] = ativacao[musculo];
        }
        setBody(novosValores);
      },
    }
  ];
  return (
<>
  <div className="bg-white p-4">
    <WomanBody muscleColors={body}/>
  </div>
  <div className="bg-slate-600 p-4 flex items-center justify-between">
    <button
      className="bg-gray-500 text-white rounded-md px-4 py-2 mr-2"
      onClick={() => setBody(muscleColors)}
    >
      Restaurar Padrões
    </button>
    <select
      id="exercicio"
      name="Exercicio"
      className="bg-white text-gray-900 rounded-md p-2 mr-2"
      onChange={(e) => setExercicioSelecionado(e.target.value)}
    >
      {exercicios.map((exercicio) => (
        <option key={exercicio.nome} value={exercicio.nome}>
          {exercicio.nome}
        </option>
      ))}
    </select>
    <button
      className="bg-blue-500 text-white rounded-md px-4 py-2"
      onClick={() => {
        const exercicioEncontrado = exercicios.find(
          (exercicio) => exercicio.nome === exercicioSelecionado
        );
        if (!exercicioEncontrado) return
        exercicioEncontrado.callback();
      }}
    >
      Adicionar
    </button>
  </div>
</>
  );
}
