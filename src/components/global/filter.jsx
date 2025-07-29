'use client';

import { Check, ChevronsUpDown, GraduationCap, School, University } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getUsers } from '@/actions/get-users';
import { Button } from '@/components/ui/shadcn/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/shadcn/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/shadcn/popover';

function Filter({ onFilterChange, onUsersFetched, defaultUser = 'all', title = 'Filter Berdasarkan Lembaga' }) {
	const [users, setUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState(defaultUser);
	const [open, setOpen] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await getUsers();
				if (response.error) throw new Error('Gagal mendapatkan data, cek database');

				const sortedUsers = response.data.sort((a, b) => a.id - b.id);
				setUsers(sortedUsers);
				if (onUsersFetched) onUsersFetched(sortedUsers);
			} catch (err) {
				setError(err.message);
			}
		};
		fetchUsers();
	}, [onUsersFetched]);

	return (
		<div className='flex flex-col items-start gap-y-4 w-full'>
			<h2 className='text-2xl font-semibold text-center'>{title}</h2>
			{error ? (
				<p className='text-red-500 text-center'>{error}</p>
			) : (
				<Popover open={open} onOpenChange={setOpen}>
					<PopoverTrigger asChild>
						<Button variant='outline' role='combobox' aria-expanded={open} className='w-[300px] justify-between'>
							{selectedUser === 'all' ? 'Semua Lembaga' : users.find((user) => user.id === parseInt(selectedUser))?.name || 'Pilih Lembaga'}
							<ChevronsUpDown className='ml-2 h-4 w-4 opacity-50' />
						</Button>
					</PopoverTrigger>
					<PopoverContent className='w-[300px] lg:h-60 md:h-60 h-52 p-0 font-["Poppins"]'>
						<Command>
							<CommandInput placeholder='Cari lembaga...' className='h-9' />
							<CommandList>
								<CommandEmpty>Tidak ada lembaga ditemukan.</CommandEmpty>
								<CommandGroup>
									<CommandItem
										value='semua lembaga'
										onSelect={() => {
											setSelectedUser('all');
											onFilterChange('all');
											setOpen(false);
										}}
									>
										<GraduationCap className='inline w-4 h-4 mr-2' />
										Semua Lembaga
										<Check className={`ml-auto ${selectedUser === 'all' ? 'opacity-100' : 'opacity-0'}`} />
									</CommandItem>
									{users.map((user) => (
										<CommandItem
											key={user.id}
											value={user.name.toLowerCase()}
											onSelect={() => {
												setSelectedUser(String(user.id));
												onFilterChange(String(user.id));
												setOpen(false);
											}}
										>
											{user.id === 1 ? <University className='inline w-4 h-4 mr-2' /> : <School className='inline w-4 h-4 mr-2' />}
											<p className='line-clamp-1'>{user.name}</p>
											<Check className={`ml-auto ${selectedUser === String(user.id) ? 'opacity-100' : 'opacity-0'}`} />
										</CommandItem>
									))}
								</CommandGroup>
							</CommandList>
						</Command>
					</PopoverContent>
				</Popover>
			)}
		</div>
	);
}

export default Filter;
