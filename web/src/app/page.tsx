"use client";
import { useEffect, useState } from "react";
import WomanBody from "./components/woman-body";
import { Exercise, MuscleColors, ativacaoMuscular, muscleColors } from '../functions'

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
