using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tourtlee.BookingSystem.Core
{
    public interface ICrudService<T>
    {
        // CREATE
        void Create(T item);
        // READ ALL
        IEnumerable<T> GetList();
        // READ By ID
        T Get(Guid id);
        // UPDATE
        void Update(T item);
        // DELETE
        void Delete(Guid id);
    }
}
