import { NoteActionKind } from '../../../enums';

interface NoteActionDataArr {
  type: NoteActionKind.SET_DATA,
  payload: Data[]
}

interface NoteActionData {
  type: NoteActionKind.ADD,
  payload: Data
}

interface NoteActionId {
  type: NoteActionKind.DELETE | NoteActionKind.GET,
  payload: string
}

interface NoteActionCurrent {
  type: NoteActionKind.CLEAR,
  payload: boolean
}

interface NoteActionEdit {
  type: NoteActionKind.EDIT,
  payload: Data
}

export type NoteAction = NoteActionData | NoteActionId | NoteActionCurrent | NoteActionEdit | NoteActionDataArr;

export type NoteState = {
  data: Data[],
  currentNoteItem: Data | null,
}
