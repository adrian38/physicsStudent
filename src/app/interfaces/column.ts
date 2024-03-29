interface Acciones {
  marcha_remota?: boolean;
  paro_remoto?: boolean;
  bloqueo?: boolean;
  reset_alarma_temperatura?: boolean;
}

interface Signals {
  motor_en_marcha?: boolean;
  motor_parado?: boolean;
  motor_defecto?: boolean;
  proteccion_termica?: boolean;
  cajon_insertado?: boolean;
}

export interface Cajon {
  id?: string;
  name?: string;
  tipo?: string;
  acciones?: Acciones;
  signals?: Signals;
  alarmas?: Alarmas[];
  total_alarmas?: number;
  intensidad_motor?: Value[];
  t_bobinado_u?: Value[];
  t_bobinado_v?: Value[];
  t_bobinado_w?: Value[];
}

interface Value {
  value: number;
  dateTime: string;
}

interface Alarmas {
  name?: string;
  status?: boolean;
  value?: number;
  dateTime?: string;
}

interface Value {
  value: number;
  dateTime: string;
}
export interface Column {
  id?: string;
  name?: string;
  cajon?: Cajon[];
  caldeo?: boolean;
  ventilador?: boolean;
  alarmas?: Alarmas[];
  vibracion?: Value[];
  t_columnas?: Value[];
  total_alarmas?: any;
  alimentacion?: Value[];
}
