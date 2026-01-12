
"use client"
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose, DialogHeader, DialogFooter } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Pencil } from 'lucide-react'
import { TodoListProps } from '../page'
import { FormEvent, useState } from 'react'

const AddOrEditTask = ({ taskType, taskToEdit, onAddOrEditTask }: { taskType: string, taskToEdit?: TodoListProps, onAddOrEditTask: (task: TodoListProps) => void }) => {

  const [taskId, setTaskId] = useState<number>();
  const [taskTitle, setTaskTitle] = useState<string>(taskToEdit ? taskToEdit.title : '');
  const [taskDescription, setTaskDescription] = useState<string>(taskToEdit ? taskToEdit.description : '');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form submitted")
    console.log(e)
    console.log({taskTitle,taskDescription})
    onAddOrEditTask({
      id: taskToEdit?.id || 0,
      title: taskTitle || '',
      description: taskDescription || '',
      completed: false
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={taskType == 'add' ? "default" : "outline"}>{taskType == 'add' ? (
          <div>Add Task</div>
        ) : (
          <div> <Pencil size={15} /> </div>
        )}</Button>
      </DialogTrigger>
      <DialogContent >
        <DialogHeader>
          <DialogTitle> {taskType == 'add' ? "Add Task" : "Edit Task"} </DialogTitle>
        </DialogHeader>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1"> Title </Label>
              <Input id="task-title" name="task-title" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} defaultValue={taskToEdit?.title} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Description</Label>
              <Input id="task-description" name="task-description" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} defaultValue={taskToEdit?.description} />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
                          <Button type="submit">Save Task</Button>

            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default AddOrEditTask