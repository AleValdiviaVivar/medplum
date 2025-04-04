/*
 * This is a generated file
 * Do not edit manually.
 */

import { Annotation } from './Annotation';
import { Appointment } from './Appointment';
import { AppointmentResponse } from './AppointmentResponse';
import { CarePlan } from './CarePlan';
import { CareTeam } from './CareTeam';
import { CodeableConcept } from './CodeableConcept';
import { Coding } from './Coding';
import { Condition } from './Condition';
import { Device } from './Device';
import { DiagnosticReport } from './DiagnosticReport';
import { DocumentReference } from './DocumentReference';
import { Encounter } from './Encounter';
import { Endpoint } from './Endpoint';
import { Extension } from './Extension';
import { Group } from './Group';
import { Identifier } from './Identifier';
import { Location } from './Location';
import { Media } from './Media';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Observation } from './Observation';
import { Organization } from './Organization';
import { Patient } from './Patient';
import { Practitioner } from './Practitioner';
import { PractitionerRole } from './PractitionerRole';
import { Procedure } from './Procedure';
import { Reference } from './Reference';
import { RelatedPerson } from './RelatedPerson';
import { Resource } from './Resource';
import { ServiceRequest } from './ServiceRequest';
import { Specimen } from './Specimen';
import { Task } from './Task';

/**
 * Representation of the content produced in a DICOM imaging study. A
 * study comprises a set of series, each of which includes a set of
 * Service-Object Pair Instances (SOP Instances - images or other data)
 * acquired or produced in a common context.  A series is of only one
 * modality (e.g. X-ray, CT, MR, ultrasound), but a study may have
 * multiple series of different modalities.
 */
export interface ImagingStudy {

  /**
   * This is a ImagingStudy resource
   */
  readonly resourceType: 'ImagingStudy';

  /**
   * The logical id of the resource, as used in the URL for the resource.
   * Once assigned, this value never changes.
   */
  id?: string;

  /**
   * The metadata about the resource. This is content that is maintained by
   * the infrastructure. Changes to the content might not always be
   * associated with version changes to the resource.
   */
  meta?: Meta;

  /**
   * A reference to a set of rules that were followed when the resource was
   * constructed, and which must be understood when processing the content.
   * Often, this is a reference to an implementation guide that defines the
   * special rules along with other profiles etc.
   */
  implicitRules?: string;

  /**
   * The base language in which the resource is written.
   */
  language?: string;

  /**
   * A human-readable narrative that contains a summary of the resource and
   * can be used to represent the content of the resource to a human. The
   * narrative need not encode all the structured data, but is required to
   * contain sufficient detail to make it &quot;clinically safe&quot; for a human to
   * just read the narrative. Resource definitions may define what content
   * should be represented in the narrative to ensure clinical safety.
   */
  text?: Narrative;

  /**
   * These resources do not have an independent existence apart from the
   * resource that contains them - they cannot be identified independently,
   * and nor can they have their own independent transaction scope.
   */
  contained?: Resource[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource and that modifies the
   * understanding of the element that contains it and/or the understanding
   * of the containing element's descendants. Usually modifier elements
   * provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the
   * definition and use of extensions. Though any implementer is allowed to
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension. Applications processing a
   * resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * Identifiers for the ImagingStudy such as DICOM Study Instance UID, and
   * Accession Number.
   */
  identifier?: Identifier[];

  /**
   * The current state of the ImagingStudy.
   */
  status: 'registered' | 'available' | 'cancelled' | 'entered-in-error' | 'unknown';

  /**
   * A list of all the series.modality values that are actual acquisition
   * modalities, i.e. those in the DICOM Context Group 29 (value set OID
   * 1.2.840.10008.6.1.19).
   */
  modality?: Coding[];

  /**
   * The subject, typically a patient, of the imaging study.
   */
  subject: Reference<Patient | Device | Group>;

  /**
   * The healthcare event (e.g. a patient and healthcare provider
   * interaction) during which this ImagingStudy is made.
   */
  encounter?: Reference<Encounter>;

  /**
   * Date and time the study started.
   */
  started?: string;

  /**
   * A list of the diagnostic requests that resulted in this imaging study
   * being performed.
   */
  basedOn?: Reference<CarePlan | ServiceRequest | Appointment | AppointmentResponse | Task>[];

  /**
   * The requesting/referring physician.
   */
  referrer?: Reference<Practitioner | PractitionerRole>;

  /**
   * Who read the study and interpreted the images or other content.
   */
  interpreter?: Reference<Practitioner | PractitionerRole>[];

  /**
   * The network service providing access (e.g., query, view, or retrieval)
   * for the study. See implementation notes for information about using
   * DICOM endpoints. A study-level endpoint applies to each series in the
   * study, unless overridden by a series-level endpoint with the same
   * Endpoint.connectionType.
   */
  endpoint?: Reference<Endpoint>[];

  /**
   * Number of Series in the Study. This value given may be larger than the
   * number of series elements this Resource contains due to resource
   * availability, security, or other factors. This element should be
   * present if any series elements are present.
   */
  numberOfSeries?: number;

  /**
   * Number of SOP Instances in Study. This value given may be larger than
   * the number of instance elements this resource contains due to resource
   * availability, security, or other factors. This element should be
   * present if any instance elements are present.
   */
  numberOfInstances?: number;

  /**
   * The procedure which this ImagingStudy was part of.
   */
  procedureReference?: Reference<Procedure>;

  /**
   * The code for the performed procedure type.
   */
  procedureCode?: CodeableConcept[];

  /**
   * The principal physical location where the ImagingStudy was performed.
   */
  location?: Reference<Location>;

  /**
   * Description of clinical condition indicating why the ImagingStudy was
   * requested.
   */
  reasonCode?: CodeableConcept[];

  /**
   * Indicates another resource whose existence justifies this Study.
   */
  reasonReference?: Reference<Condition | Observation | Media | DiagnosticReport | DocumentReference>[];

  /**
   * Per the recommended DICOM mapping, this element is derived from the
   * Study Description attribute (0008,1030). Observations or findings
   * about the imaging study should be recorded in another resource, e.g.
   * Observation, and not in this element.
   */
  note?: Annotation[];

  /**
   * The Imaging Manager description of the study. Institution-generated
   * description or classification of the Study (component) performed.
   */
  description?: string;

  /**
   * Each study has one or more series of images or other content.
   */
  series?: ImagingStudySeries[];
}

/**
 * Each study has one or more series of images or other content.
 */
export interface ImagingStudySeries {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * The DICOM Series Instance UID for the series.
   */
  uid: string;

  /**
   * The numeric identifier of this series in the study.
   */
  number?: number;

  /**
   * The modality of this series sequence.
   */
  modality: Coding;

  /**
   * A description of the series.
   */
  description?: string;

  /**
   * Number of SOP Instances in the Study. The value given may be larger
   * than the number of instance elements this resource contains due to
   * resource availability, security, or other factors. This element should
   * be present if any instance elements are present.
   */
  numberOfInstances?: number;

  /**
   * The network service providing access (e.g., query, view, or retrieval)
   * for this series. See implementation notes for information about using
   * DICOM endpoints. A series-level endpoint, if present, has precedence
   * over a study-level endpoint with the same Endpoint.connectionType.
   */
  endpoint?: Reference<Endpoint>[];

  /**
   * The anatomic structures examined. See DICOM Part 16 Annex L
   * (http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_L.html)
   * for DICOM to SNOMED-CT mappings. The bodySite may indicate the
   * laterality of body part imaged; if so, it shall be consistent with any
   * content of ImagingStudy.series.laterality.
   */
  bodySite?: Coding;

  /**
   * The laterality of the (possibly paired) anatomic structures examined.
   * E.g., the left knee, both lungs, or unpaired abdomen. If present,
   * shall be consistent with any laterality information indicated in
   * ImagingStudy.series.bodySite.
   */
  laterality?: Coding;

  /**
   * The specimen imaged, e.g., for whole slide imaging of a biopsy.
   */
  specimen?: Reference<Specimen>[];

  /**
   * The date and time the series was started.
   */
  started?: string;

  /**
   * Indicates who or what performed the series and how they were involved.
   */
  performer?: ImagingStudySeriesPerformer[];

  /**
   * A single SOP instance within the series, e.g. an image, or
   * presentation state.
   */
  instance?: ImagingStudySeriesInstance[];
}

/**
 * A single SOP instance within the series, e.g. an image, or
 * presentation state.
 */
export interface ImagingStudySeriesInstance {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * The DICOM SOP Instance UID for this image or other DICOM content.
   */
  uid: string;

  /**
   * DICOM instance  type.
   */
  sopClass: Coding;

  /**
   * The number of instance in the series.
   */
  number?: number;

  /**
   * The description of the instance.
   */
  title?: string;
}

/**
 * Indicates who or what performed the series and how they were involved.
 */
export interface ImagingStudySeriesPerformer {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * Distinguishes the type of involvement of the performer in the series.
   */
  function?: CodeableConcept;

  /**
   * Indicates who or what performed the series.
   */
  actor: Reference<Practitioner | PractitionerRole | Organization | CareTeam | Patient | Device | RelatedPerson>;
}
