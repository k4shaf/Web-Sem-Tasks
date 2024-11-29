'use client';
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Blogs() {
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
    const [blogs, setBlogs] = useState([{ id: 1, title: 'Blog 1', content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the ...' }])
    const [editId, setEditId] = useState(null);
    const [editTitle, setEditTitle] = useState('');
    const [editContent, setEditContent] = useState('');

    const [newTitle, setNewTitle] = useState('Blog #');
    const [newContent, setNewContent] = useState('Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the ...');

    const openEditDialog = () => setIsEditDialogOpen(true);
    const closeEditDialog = () => setIsEditDialogOpen(false);
    const openAddDialog = () => setIsAddDialogOpen(true);
    const closeAddDialog = () => setIsAddDialogOpen(false);

    const handleDelete = (id) => {
        const confirmed = window.confirm("Are you sure you want to delete this post?");
        if (confirmed) {
            setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
        }
    }

    const addBlog = () => {
        const newBlog = {
            id: blogs.length + 1,
            title: newTitle,
            content: newContent,
        }
        setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
        setNewTitle('Blog #');
        setNewContent('Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the ...');
        closeAddDialog();
    }

    const handleEditClick = (blog) => {
        setEditId(blog.id);
        setEditTitle(blog.title);
        setEditContent(blog.content);
    }

    const handleSaveChanges = () => {
        setBlogs((prevBlogs) =>
            prevBlogs.map((blog) =>
                blog.id === editId ? { title: editTitle, content: editContent } : blog
            )
        );
        setEditId(null); // Close the dialog after saving
        setIsEditDialogOpen(false);
        closeEditDialog();
    };

    return (
        <div className='h-screen p-14 bg-gradient-to-r from-yellow-200 to-yellow-500'>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                <DialogTrigger asChild>
                    <Button onClick={openAddDialog} className='mb-8'>Add Blog</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add Blog</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-1 items-center gap-4">
                            <Label htmlFor="title">
                                Title
                            </Label>
                            <Input
                                id="title"
                                defaultValue="Blog #"
                                className="col-span-3"
                                onChange={(e) => setNewTitle(e.target.value)}
                            />
                        </div>
                        <div className="grid grid-cols-1 items-center gap-2">
                            <Label htmlFor="description">
                                Description
                            </Label>
                            <Input
                                id="description"
                                defaultValue="Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the ..."
                                className="col-span-3"
                                onChange={(e) => setNewContent(e.target.value)}
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button className='w-full' onClick={() => addBlog()}>Add</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            <div className='grid grid-cols-4 gap-4'>
                {blogs.map((blog) => (
                    <Card>
                        <CardHeader>
                            <CardTitle>{blog.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>{blog.content}</p>
                        </CardContent>
                        <CardFooter>
                            <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                                <DialogTrigger asChild>
                                    <Button variant="outline" onClick={() => handleEditClick(blog)}>Edit Blog</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Edit Blog?</DialogTitle>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-1 items-center gap-4">
                                            <Label htmlFor="title">
                                                Title
                                            </Label>
                                            <Input
                                                id="title"
                                                defaultValue={blog.title}
                                                className="col-span-3"
                                                onChange={(e) => setEditTitle(e.target.value)}
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 items-center gap-2">
                                            <Label htmlFor="description">
                                                Description
                                            </Label>
                                            <Input
                                                id="description"
                                                defaultValue={blog.content}
                                                className="col-span-3"
                                                onChange={(e) => setEditContent(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button onClick={() => handleSaveChanges()} className='w-full' type="submit">Edit</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                            <Button onClick={() => handleDelete(blog.id)} className='bg-red-600 ml-2'>Delete</Button>
                        </CardFooter>
                    </Card>
                ))}


            </div>
        </div>
    )
}