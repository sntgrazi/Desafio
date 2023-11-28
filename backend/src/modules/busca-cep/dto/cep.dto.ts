export interface CustomCepWhereInput {
    cep: {
      not: string;
    };
    km: {
      lte: number;
    };
  }