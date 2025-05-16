import { useState, useEffect } from "react";
import { addDays, parseISO } from "date-fns";
import { CirclePicker } from "react-color";

import Calendar from "../../utils/Calendar";
import TextInput from "../../utils/Inputs/Text";
import ToggleInput from "../../utils/Inputs/Toggle";
import SimpleModal from "../../utils/Modals/SimpleModal";
import CheckboxInput from "../../utils/Inputs/Checkbox";
import TextAreaInput from "../../utils/Inputs/TextArea";
import { TaskFormProps } from "../../interfaces";
import PrioritaryModal from "../PrioritaryModal";

const TaskFrom = ({
  editTask,
  taskToEdit,
  tasks = [],
  setTasks,
  showModal,
  setShowModal,
}: TaskFormProps) => {
  const [newTaskText, setNewTaskText] = useState("");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [defaultColor, setDefaultColor] = useState("#2196f3");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [showDateRange, setShowDateRange] = useState(false);
  const [triggerValidation, setTriggerValidation] = useState(false);
  const [isPriority, setIsPriority] = useState(false);
  const [showPrioritaryModal, setShowPrioritaryModal] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: editTask
        ? taskToEdit?.initDate
          ? parseISO(taskToEdit?.initDate)
          : new Date()
        : new Date(),
      endDate: editTask
        ? taskToEdit?.endDate
          ? parseISO(taskToEdit.endDate)
          : addDays(new Date(), 7)
        : addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  function handleClose() {
    setShowModal(false);
    setIsPriority(false);
    setShowDateRange(false);
    setShowColorPicker(false);
    setTriggerValidation(false);
    setNewTaskText("");
    setNewTaskDescription("");
    setDefaultColor("#2196f3");
    setDateRange([
      {
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        key: "selection",
      },
    ]);
  }

  function handleShowPriorityModal(prioritary: boolean) {
    setIsPriority(prioritary);
    prioritary && setShowPrioritaryModal(true);
  }

  function restartDefaultColor(checked: boolean) {
    setShowColorPicker(checked);
    !checked && setDefaultColor("#2196f3");
  }

  function handleSubmit() {
    if (newTaskText.trim() === "") {
      setTriggerValidation(true);
      return;
    }
    if (!editTask) {
      setTasks &&
        setTasks([
          ...tasks,
          {
            id: tasks.length + 1,
            text: newTaskText,
            completed: false,
            haveRange: showDateRange,
            description: newTaskDescription,
            initDate: showDateRange
              ? dateRange[0].startDate.toISOString()
              : null,
            endDate: showDateRange ? dateRange[0].endDate.toISOString() : null,
            prioritary: isPriority,
            color: defaultColor,
          },
        ]);
    } else {
      setTasks &&
        setTasks(
          tasks.map((task) => {
            if (task.id === taskToEdit?.id) {
              return {
                ...task,
                text: newTaskText,
                description: newTaskDescription,
                haveRange: showDateRange,
                initDate: showDateRange
                  ? dateRange[0].startDate.toISOString()
                  : null,
                endDate: showDateRange
                  ? dateRange[0].endDate.toISOString()
                  : null,
                prioritary: isPriority,
                color: defaultColor,
              };
            }
            return task;
          })
        );
    }

    handleClose();
  }

  useEffect(() => {
    if (editTask) {
      setNewTaskText(taskToEdit?.text || "");
      setShowColorPicker(taskToEdit?.color !== "#2196f3");
      setDefaultColor(taskToEdit?.color || "#2196f3");
      setNewTaskDescription(taskToEdit?.description || "");
      setShowDateRange(taskToEdit?.haveRange || false);
      setIsPriority(taskToEdit?.prioritary || false);
      setDateRange([
        {
          startDate: taskToEdit?.initDate
            ? parseISO(taskToEdit?.initDate)
            : new Date(),
          endDate: taskToEdit?.endDate
            ? parseISO(taskToEdit?.endDate)
            : addDays(new Date(), 7),
          key: "selection",
        },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);

  return (
    <>
      <SimpleModal
        showModal={showModal}
        title={editTask ? "Edit Task" : "New Task"}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        backgroundColor={defaultColor}
      >
        <form>
          <TextInput
            label="Task"
            value={newTaskText}
            onChange={setNewTaskText}
            showAlert={true}
            placeholder="Task name"
            validateOnSubmit={triggerValidation}
          />
          <TextAreaInput
            label="Task Description"
            value={newTaskDescription}
            onChange={setNewTaskDescription}
            placeholder="Task description"
            showCharacterLimit={true}
            characterLimit={500}
          />
          <ToggleInput
            label="Add time to complete it?"
            value={showDateRange}
            onChange={setShowDateRange}
            backgroundColor="#111"
            disabled={
              editTask && taskToEdit?.prioritary && taskToEdit?.haveRange
            }
          />
          {showDateRange && (
            <div className="my-5 flex justify-center">
              <Calendar
                editableDateInputs={true}
                dateRange={dateRange}
                onChangeFunc={setDateRange}
                isPrioritary={taskToEdit?.prioritary}
              />
            </div>
          )}
          <div className="flex justify-between my-4">
            <CheckboxInput
              label="Is priority?"
              checked={isPriority}
              onChange={handleShowPriorityModal}
              disabled={editTask && taskToEdit?.prioritary}
            />
            <CheckboxInput
              label="Remember via email"
              checked={false}
              onChange={() => {}}
            />
          </div>
          <ToggleInput
            label="Change card color?"
            value={showColorPicker}
            onChange={restartDefaultColor}
            backgroundColor="#111"
          />
          <div className="flex justify-center">
            {showColorPicker && (
              <div className="flex justify-center bg-black p-3 rounded-md max-w-md">
                <CirclePicker
                  color={defaultColor}
                  onChange={(color) => {
                    setDefaultColor(color.hex);
                  }}
                />
              </div>
            )}
          </div>
        </form>
      </SimpleModal>
      <PrioritaryModal
        setShowPrioritaryModal={setShowPrioritaryModal}
        showPrioritaryModal={showPrioritaryModal}
      />
    </>
  );
};

export default TaskFrom;
