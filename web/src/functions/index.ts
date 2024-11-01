export type MuscleColors = {
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

export interface Exercise {
    nome: string;
    callback: () => void;
}

export const muscleColors: MuscleColors = {
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

export const ativacaoMuscular = {
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
