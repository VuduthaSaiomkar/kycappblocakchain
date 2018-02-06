import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.acme.kyc{
   export abstract class Network_Users extends Participant {
      id: string;
      name: string;
   }
   export class Aadhar_Admin extends Network_Users {
      canSignTx: boolean;
   }
   export class Passport_Admin extends Network_Users {
      canSignTx: boolean;
   }
   export class KYC_Seeker extends Network_Users {
      organisation_Name: string;
   }
   export enum Gender {
      MALE,
      FEMALE,
   }
   export enum Status {
      REQUESTED,
      APPROVED,
      DENIED,
      PENDING,
      UNDER_REVIEW,
      VERIFIED,
   }
   export enum Documents {
      AADHAR,
      PASSPORT,
   }
   export class User extends Network_Users {
      kyc_id: KYC_Details;
   }
   export class KYC_Information {
      name: string;
      dob: string;
      gender: Gender;
      aadhar_number: string;
      passport_number: string;
   }
   export class Documents_status {
      document_type: Documents;
      status: Status;
      remarks: string;
   }
   export class Added_KYC extends Event {
      kyc_id: string;
      userId: User;
   }
   export class Requesting_Aadhar_verification extends Event {
      aadhar_number: string;
      userId: User;
   }
   export class Requesting_passport_verification extends Event {
      passport_number: string;
      userId: User;
   }
   export class KYC_Details extends Asset {
      kyc_id: string;
      kyc_of_userid: User;
      KYC_Information: KYC_Information;
      applied_documents_status: Documents_status[];
      KYC_status: Status;
   }
   export abstract class From_Kyc extends Asset {
      id: string;
      userId: User;
      status: Status;
   }
   export class Aadhar_verifications extends From_Kyc {
      aadhar_number: string;
   }
   export class Passport_verifications extends From_Kyc {
      passport_number: string;
   }
   export class Send_for_KYC_approval extends Transaction {
      KYC_Information: KYC_Information;
   }
   export abstract class verification_of_documents extends Transaction {
      status: Status;
      remarks: string;
   }
   export class aadhar_Status_Update extends Event {
      userID: User;
   }
   export class passport_Status_Update extends Event {
      userID: User;
   }
   export class Update_AadharStatus extends verification_of_documents {
      aadhar_verifications_ID: Aadhar_verifications;
   }
   export class Update_PassportStatus extends verification_of_documents {
      passport_verifications_ID: Passport_verifications;
   }

  
// }
