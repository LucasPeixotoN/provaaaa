export interface Participante {
    nome: string;
    email: string;
    cpf: string;
    ingresso: 'Padrão' | 'VIP' | 'Estudante' | '';
  }
  
  export interface Evento {
    eventos: 'TechConf 2025' | 'Summit de Inovação' | 'Angular World' | 'Conexão Dev' | '';
    modalidade: 'Presencial' | 'Online' | '';
    inicio: string;   
    termino: string;  
    quantPart: number;
    participantes: Participante[];
  }
  