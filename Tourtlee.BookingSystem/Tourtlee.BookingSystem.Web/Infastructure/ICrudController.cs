﻿using Microsoft.AspNet.Mvc;
using System;
using System.Collections.Generic;

namespace Tourtlee.BookingSystem.Web.Infastructure
{
    interface ICrudController<T>
    {
        // CREATE
        void Post(T item);
        // READ ALL
        IEnumerable<T> GetList();
        // READ By ID
        T Get(Guid id);
        // UPDATE
        void Put([FromBody] T updatedItem);
        // DELETE
        void Delete(Guid id);
    }
}