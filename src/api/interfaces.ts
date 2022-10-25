export interface AddContaDto {
  titulo?: string | undefined;
  saldo?: number;
  banco?: string | undefined;
}

export interface AddDividaDto {
  titulo?: string | undefined;
  nomeDevedor?: string | undefined;
  descricao?: string | undefined;
  valor?: number;
  dataDivida?: Date;
  dataVencimento?: Date;
  isAtivo?: boolean;
  isGasto?: boolean;
}

export interface AddObjetivoDto {
  titulo?: string | undefined;
  descricao?: string | undefined;
  valor?: number;
  isCumprido?: boolean;
}

export interface AddOperacaoDto {
  titulo?: string | undefined;
  descricao?: string | undefined;
  valor?: number;
  dataOperacao?: Date;
  isGasto?: boolean;
}

export interface AddPlanejamentoDto {
  titulo?: string | undefined;
  valorInicial?: number;
  valorPlanejado?: number;
  isExcedido?: boolean;
}

export interface GetContaDto {
  id?: number;
  titulo?: string | undefined;
  saldo?: number;
  banco?: string | undefined;
}

export interface GetContaDtoListServiceResponse {
  data?: GetContaDto[] | undefined;
  success?: boolean;
  message?: string | undefined;
}

export interface GetContaDtoServiceResponse {
  data?: GetContaDto;
  success?: boolean;
  message?: string | undefined;
}

export interface GetDividaDto {
  id?: number;
  titulo?: string | undefined;
  nomeDevedor?: string | undefined;
  descricao?: string | undefined;
  valor?: number;
  dataDivida?: Date;
  dataVencimento?: Date;
  isAtivo?: boolean;
  isGasto?: boolean;
}

export interface GetDividaDtoListServiceResponse {
  data?: GetDividaDto[] | undefined;
  success?: boolean;
  message?: string | undefined;
}

export interface GetDividaDtoServiceResponse {
  data?: GetDividaDto;
  success?: boolean;
  message?: string | undefined;
}

export interface GetObjetivoDto {
  id?: number;
  titulo?: string | undefined;
  descricao?: string | undefined;
  valor?: number;
  isCumprido?: boolean;
}

export interface GetObjetivoDtoListServiceResponse {
  data?: GetObjetivoDto[] | undefined;
  success?: boolean;
  message?: string | undefined;
}

export interface GetObjetivoDtoServiceResponse {
  data?: GetObjetivoDto;
  success?: boolean;
  message?: string | undefined;
}

export interface GetOperacaoDto {
  id?: number;
  titulo?: string | undefined;
  descricao?: string | undefined;
  valor?: number;
  dataOperacao?: Date;
  isGasto?: boolean;
}

export interface GetOperacaoDtoListServiceResponse {
  data?: GetOperacaoDto[] | undefined;
  success?: boolean;
  message?: string | undefined;
}

export interface GetOperacaoDtoServiceResponse {
  data?: GetOperacaoDto;
  success?: boolean;
  message?: string | undefined;
}

export interface GetPlanejamentoDto {
  id?: number;
  titulo?: string | undefined;
  valorInicial?: number;
  valorPlanejado?: number;
  isExcedido?: boolean;
}

export interface GetPlanejamentoDtoListServiceResponse {
  data?: GetPlanejamentoDto[] | undefined;
  success?: boolean;
  message?: string | undefined;
}

export interface GetPlanejamentoDtoServiceResponse {
  data?: GetPlanejamentoDto;
  success?: boolean;
  message?: string | undefined;
}

export interface Int32ServiceResponse {
  data?: number;
  success?: boolean;
  message?: string | undefined;
}

export interface StringServiceResponse {
  data?: string | undefined;
  success?: boolean;
  message?: string | undefined;
}

export interface UpdateContaDto {
  id?: number;
  titulo?: string | undefined;
  saldo?: number;
  banco?: string | undefined;
}

export interface UpdateDividaDto {
  id?: number;
  titulo?: string | undefined;
  nomeDevedor?: string | undefined;
  descricao?: string | undefined;
  valor?: number;
  dataDivida?: Date;
  dataVencimento?: Date;
  isAtivo?: boolean;
  isGasto?: boolean;
}

export interface UpdateObjetivoDto {
  id?: number;
  titulo?: string | undefined;
  descricao?: string | undefined;
  valor?: number;
  isCumprido?: boolean;
}

export interface UpdateOperacaoDto {
  id?: number;
  titulo?: string | undefined;
  descricao?: string | undefined;
  valor?: number;
  dataOperacao?: Date;
  isGasto?: boolean;
}

export interface UpdatePlanejamentoDto {
  id?: number;
  titulo?: string | undefined;
  valorInicial?: number;
  valorPlanejado?: number;
  isExcedido?: boolean;
}

export interface UsuarioLoginDto {
  email?: string | undefined;
  password?: string | undefined;
}

export interface UsuarioRegisterDto {
  email?: string | undefined;
  password?: string | undefined;
}
