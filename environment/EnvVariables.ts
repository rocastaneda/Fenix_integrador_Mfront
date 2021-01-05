interface RequestData {
  base_url_oag: string;
  custom_header_usuario?: string;
  custom_header_idConsumidor: string;
  custom_header_idDestino: string;
  custom_header_auth_token: string;
  custom_header_unidadOrganizacional?: string;
  custom_header_canal?: string;
  encoded_body_basic_auth?: {
    grant_type: string;
    username: string;
    password: string;
    scope: string;
  };
  journey_body_tag?: string;
  journey_body_idAplicacion?: string;
  journey_body_idProducto?: string;
  journey_body_idSubproducto?: string;
  journey_body_frecuencia?: string;
  journey_body_moneda?: string;
  journey_body_sistemaAmortizacion?: string;
}

export interface EnvVariables {
  readonly getGenerateSession?: { requestData: RequestData };
  readonly getAuthToken?: { requestData: RequestData };
  readonly getJourneySession?: { requestData: RequestData };
  readonly makeSimRequest?: { requestData: RequestData };
}
