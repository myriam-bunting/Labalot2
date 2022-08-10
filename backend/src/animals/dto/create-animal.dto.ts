export class CreateAnimalDto {
  tag: number;
  genotype?: string;
  gender?: string;
  birth_date: Date;
  phenotype?: string;
  experiment_id: number;
  culled_date: Date;
}
