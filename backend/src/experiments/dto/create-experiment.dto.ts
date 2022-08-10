export class CreateExperimentDto {
  protocol_id: string;
  start_date: Date;
  end_date?: Date;
  description?: string;
}
