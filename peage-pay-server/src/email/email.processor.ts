import { OnQueueActive, Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('emailQueue')
export class EmailProcessor {
  @OnQueueActive()
  onActive(job: Job) {
    console.log(
      `Processing job ${job.id} of type ${job.name} with data ${job.data}...`,
    );
  }

  @Process('verificationemail')
  public handleVerificationEmail(job: Job) {
    console.log('running job');

    console.log(job.data);
  }
}
