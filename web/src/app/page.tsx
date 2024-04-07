"use client";
import { useEffect, useState } from "react";
import WomanBody from "./components/woman-body";

type MuscleColors = {
  trapezio: number;
  deltoidLareal: number;
  deltoidAnterior: number;
  deltoidPosterior: number;
  romboide: number;
  peitoralMaior: number;
  tricepesLogo: number;
  tricepesMedio: number;
  tricepesLateral: number;
  latissimoDorso: number;
  bicipes: number;
  serratil: number;
  absMedio: number;
  absInfra: number;
  absLateral: number;
  lombar: number;
  gluteoMaximo: number;
  gluteoMedio: number;
  sartori: number;
  adutor: number;
  retoFemoral: number;
  vastoMedial: number;
  vastoLaretal: number;
  bicipesFemoral: number;
  semitendineo: number;
  semiMembranoso: number;
  panturilhaMedial: number;
  panturilhaLateral: number;
};

interface Exercise {
  nome: string;
  callback: () => void;
}

const muscleColors: MuscleColors = {
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
  },
};

const Home: React.FC = () => {
  const [exercicioSelecionado, setExercicioSelecionado] =
    useState<string>("Supino");
  const [body, setBody] = useState<MuscleColors>({ ...muscleColors });
  const [intensidade, setIntensidade] = useState<number>(100);
  const [exerciciosDiarios, setExerciciosDiarios] = useState<Exercise[]>([]);

  const handleChangeIntensidade = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIntensidade(parseInt(event.target.value)); // Atualiza o estado da intensidade
  };

  const exercicios: Exercise[] = [
    {
      nome: "Supino",
      callback: () => {
        const novosValores: any = { ...body };
        const ativacao: any = ativacaoMuscular["supino"];
        for (const musculo in ativacao) {
          novosValores[musculo] += ativacao[musculo] * (intensidade / 100);
          if (novosValores[musculo] > 100) novosValores[musculo] = 100;
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
          novosValores[musculo] += ativacao[musculo] * (intensidade / 100);
          if (novosValores[musculo] > 100) novosValores[musculo] = 100;
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
          novosValores[musculo] += ativacao[musculo] * (intensidade / 100);
          if (novosValores[musculo] > 100) novosValores[musculo] = 100;
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
          novosValores[musculo] += ativacao[musculo] * (intensidade / 100);
          if (novosValores[musculo] > 100) novosValores[musculo] = 100;
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
          novosValores[musculo] += ativacao[musculo] * (intensidade / 100);
          if (novosValores[musculo] > 100) novosValores[musculo] = 100;
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
          novosValores[musculo] += ativacao[musculo] * (intensidade / 100);
          if (novosValores[musculo] > 100) novosValores[musculo] = 100;
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
          novosValores[musculo] += ativacao[musculo] * (intensidade / 100);
          if (novosValores[musculo] > 100) novosValores[musculo] = 100;
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
          novosValores[musculo] += ativacao[musculo] * (intensidade / 100);
          if (novosValores[musculo] > 100) novosValores[musculo] = 100;
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
          novosValores[musculo] += ativacao[musculo] * (intensidade / 100);
          if (novosValores[musculo] > 100) novosValores[musculo] = 100;
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
          novosValores[musculo] += ativacao[musculo] * (intensidade / 100);
          if (novosValores[musculo] > 100) novosValores[musculo] = 100;
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
          novosValores[musculo] += ativacao[musculo] * (intensidade / 100);
          if (novosValores[musculo] > 100) novosValores[musculo] = 100;
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
          novosValores[musculo] += ativacao[musculo] * (intensidade / 100);
          if (novosValores[musculo] > 100) novosValores[musculo] = 100;
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
          novosValores[musculo] += ativacao[musculo] * (intensidade / 100);
          if (novosValores[musculo] > 100) novosValores[musculo] = 100;
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
          novosValores[musculo] += ativacao[musculo] * (intensidade / 100);
          if (novosValores[musculo] > 100) novosValores[musculo] = 100;
        }
        setBody(novosValores);
      },
    },
  ];

  const handleAdicionarExercicio = () => {
    const exercicioEncontrado = exercicios.find(
      (exercicio) => exercicio.nome === exercicioSelecionado
    );
    if (exercicioEncontrado) {
      exercicioEncontrado.callback();
      const novoBody: any = { ...body };
      const ativacao: any =
        ativacaoMuscular[exercicioSelecionado as keyof typeof ativacaoMuscular];
      for (const musculo in novoBody) {
        if (Object.prototype.hasOwnProperty.call(novoBody, musculo)) {
          novoBody[musculo] += novoBody[musculo] +=
            ativacao[musculo] * (intensidade / 100);
          if (novoBody[musculo] > 100) novoBody[musculo] = 100;
        }
      }
      setBody(novoBody);
      setExerciciosDiarios((prevExercicios) => [
        ...prevExercicios,
        exercicioEncontrado,
      ]);
      console.log(body);
    }
  };

  useEffect(() => {
    const reduzirDanoMuscularDiario = () => {
      setBody((prevBody) => {
        console.log(prevBody);
        const novoBody: any = { ...prevBody };
        for (const musculo in novoBody) {
          let porcentagemAtual = novoBody[musculo];
          porcentagemAtual -= 10;
          if (porcentagemAtual < 0) {
            novoBody[musculo] = 0;
          } else if (porcentagemAtual > 100) {
            novoBody[musculo] = 100;
          } else {
            console.log(
              "REDUZIR " +
                musculo +
                ",de " +
                novoBody[musculo] +
                " para " +
                porcentagemAtual
            );
            novoBody[musculo] = porcentagemAtual;
          }
        }
        return novoBody;
      });
    };

    const reducaoDiariaInterval = setInterval(() => {
      reduzirDanoMuscularDiario();
    }, 2000);

    return () => clearInterval(reducaoDiariaInterval);
  }, []);

  return (
    <>
      <div className="bg-white p-4">
        <WomanBody muscleColors={body} />
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
          onClick={handleAdicionarExercicio}
        >
          Adicionar
        </button>
        <div>
          <label htmlFor="intensidade">Intensidade:</label>
          <input
            type="range"
            id="intensidade"
            name="intensidade"
            min="0"
            max="100"
            value={intensidade}
            onChange={handleChangeIntensidade}
          />
          <span>{intensidade}</span>
        </div>
      </div>
    </>
  );
};
export default Home;
